import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

format(new Date(), 'dd/MM/yyyy', { locale: ptBR });
