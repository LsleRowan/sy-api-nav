/*
 * API 配置
 * 添加 / 删除 API 只需要修改这里。
 */
const apiGroups = [
  {
    category: "音乐 API",
    items: [
      {
        name: "GD音乐台",
        description: "音乐相关接口",
        url: "https://music.gdstudio.xyz"
      },
      {
        name: "祈杰のMeting-API",
        description: "音乐相关接口",
        url: "https://api.qijieya.cn/meting/"
      }
    ]
  },
  {
    category: "视频 API",
    items: [
      {
        name: "视频源",
        description: "视频api中转代理",
        url: "https://pz.v88.qzz.io"
      }
    ]
  },
  {
    category: "图片 API",
    items: [
      {
        name: "LoliAPI",
        description: "随机图片api",
        url: "https://www.loliapi.com"
      }
    ]
  },
  {
    category: "语录 API",
    items: [
      {
        name: "Hitokoto",
        description: "随机一言api",
        url: "https://hitokoto.cn"
      }
    ]
  },
  {
    category: "其他 API",
    items: [
      {
        name: "示例 API",
        description: "其他常用接口",
        url: "https://example.com/api"
      }
    ]
  }
];

const list = document.getElementById("api-list");

for (const group of apiGroups) {
  if (!group.items?.length) continue;

  const section = document.createElement("section");
  section.className = "category";

  const title = document.createElement("h2");
  title.className = "category-title";
  title.textContent = group.category;

  const cards = document.createElement("div");
  cards.className = "cards";

  for (const api of group.items) {
    const link = document.createElement("a");
    link.className = "card";
    link.href = api.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const name = document.createElement("div");
    name.className = "card-name";
    name.textContent = api.name;

    const description = document.createElement("div");
    description.className = "card-description";
    description.textContent = api.description || "";

    const url = document.createElement("div");
    url.className = "card-url";
    url.textContent = api.url;

    link.append(name, description, url);
    cards.appendChild(link);
  }

  section.append(title, cards);
  list.appendChild(section);
}
