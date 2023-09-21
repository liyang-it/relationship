import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 称呼关系数据类库 https://github.com/mumuy/relationship
import relationship from 'relationship.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(relationship)
app.mount('#app')

