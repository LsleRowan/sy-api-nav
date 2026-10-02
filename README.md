# API Hub

个人 API 收藏与跳转导航。

## 部署

这是纯静态项目，可以直接部署到：

- Cloudflare Pages
- Vercel
- GitHub Pages
- 任意静态空间

不需要 Node.js、数据库、Worker 或后端。

## 修改 API

编辑 `app.js` 顶部的 `apiGroups`：

```js
{
  category: "音乐 API",
  items: [
    {
      name: "API 名称",
      description: "API 描述",
      url: "https://example.com/api"
    }
  ]
}
```

点击卡片会在新标签页打开对应 API。
