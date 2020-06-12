import '@/sass/main.sass'
import {Excel} from '@/components/excel/Excel'
import {Header} from '@/components/header/Header'
import {Formula} from '@/components/formula/Formula'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Table} from '@/components/table/Table'

const excel = new Excel({
  selector: '#app',
  options: {
    components: [Header, Toolbar, Formula, Table],
  },
})

excel.render()
