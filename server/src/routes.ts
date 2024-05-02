import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { startOfDay, getDay } from 'date-fns';
import { prisma } from '@/lib/prisma';

export async function appRoutes(app: FastifyInstance) {
  app.post('/habits', async (request) => {
    const createHabitbody = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6)),
    });
    const { title, weekDays } = createHabitbody.parse(request.body);

    const toDay = startOfDay(new Date());

    await prisma.habit.create({
      data: {
        title,
        created_at: toDay,
        weekDays: {
          create: weekDays.map((weekDay) => {
            return {
              week_day: weekDay,
            };
          }),
        },
      },
    });
  });

  app.get('/day', async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date(),
    });

    const { date } = getDayParams.parse(request.query);
    const weekDay = getDay(date);

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay,
          },
        },
      },
    });
    return {
      possibleHabits,
    };
  });
}
