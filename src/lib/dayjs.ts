import lib from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-BR'

lib.locale('pt-BR')
lib.extend(relativeTime)

const dayjs = lib
export default dayjs

