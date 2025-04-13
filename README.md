## nitro drizzle 示例

### 运行

1. 复制 .env.example 为 .env 文件
   里面记录了 SQLite 文件名称

2. 安装依赖

```shell
pnpm i
```

3. 生成数据库并运行迁移文件

```shell
pnpm run db:generate && pnpm run db:migrate && pnpm run db:push
```

4. 运行

```shell
pnpm run dev
```

5. 查看数据表内容

```shell
pnpm run db:studio
```

### Demo 提供的接口

> 在线文档：`http://localhost:4000/_scalar`

1. 新增用户 POST /api/user
2. 查询所有用户 GET /api/user
3. 根据 id 查询用户 GET /api/user/1
4. 编辑用户 PUT /api/user/1
5. 删除用户 DELETE /api/user/1
