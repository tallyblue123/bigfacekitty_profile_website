# BigFaceKitty Profile Website

这是一个基于 `Ui/` 首页原型整理出的静态个人介绍页，不接入动态数据。页面恢复了原型的固定侧边栏、非对称画布节点和连接线布局，并用 `model-viewer` 加入了固定在右下角的可互动 3D 猫咪。

## 文件

- `index.html`: 成品静态首页，包含 HTML、CSS、画布连接线脚本和 `model-viewer` 互动脚本。
- `assets/bigfacekitty-cat.gltf`: 优先尝试加载的 3D 猫素材；当前需要配套 `gltf_buffer_*.bin` 文件。
- `assets/bigfacekitty-cat.glb`: `.gltf` 加载失败时的备用本地 3D 黑猫模型。
- `assets/bigfacekitty-mascot.jpg`: 页面使用的本地头像/吉祥物视觉资产。
- `assets/bigfacekitty-mascot.png`: 生成图源文件，保留用于后续再导出。
- `tools/generate-cat-glb.js`: 生成本地 3D 猫模型的脚本。
- `Ui/`: 原始 UI 原型与设计说明，未修改。

## 预览

直接用浏览器打开 `index.html` 即可。页面里的邮箱、GitHub、项目名称和简介文案都是静态占位内容，可直接在 HTML 中替换。

`model-viewer` 组件从 CDN 引入，3D 模型本身是本地文件。如果需要完全离线部署，可以把 `@google/model-viewer` 的脚本下载到本项目并改成本地引用。`bigfacekitty-cat.gltf` 不是单文件模型，需要把它引用的 `gltf_buffer_*.bin` 放在 `assets/` 下，否则页面会自动回退到 `bigfacekitty-cat.glb`。
