# 杨雅风

个人主页。用 AI，把生活里的问题做成能用的东西。

## 本地预览

```bash
npm install
npm run dev
```

## 上线

建议挂到子域名 `yafeng.dadao.life`（`dadao.life` 留给产品「达到清单」）。

1. 把这个仓库部署到 Vercel
2. 在域名 DNS 里加一条 CNAME：`yafeng` → `cname.vercel-dns.com`
3. 在 Vercel 项目里把 `yafeng.dadao.life` 加为自定义域名

文案都在 `src/content.ts`，改完保存即生效。
