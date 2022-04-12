import { format, formatDistanceStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const formatDate = date => format(new Date(date), 'dd/MM/yyyy')
export const formatDistanceStrictDate = date => {
  return formatDistanceStrict(new Date(date), new Date(), { locale: ptBR })
}
