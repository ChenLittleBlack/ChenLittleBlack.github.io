import { VXETable } from '../../../../packages/all'

// 创建一个简单的展开内容渲染
VXETable.renderer.add('MyExpand', {
  renderExpand (renderOpts, params) {
    const { row } = params
    return [
      <ul>
        <li>
          <span>ID：</span>
          <span>{ row.id }</span>
        </li>
        <li>
          <span>Name：</span>
          <span>{ row.name }</span>
        </li>
        <li>
          <span>UpdateTime：</span>
          <span>{ row.updateTime }</span>
        </li>
        <li>
          <span>CreateTime：</span>
          <span>{ row.createTime }</span>
        </li>
      </ul>
    ]
  }
})
