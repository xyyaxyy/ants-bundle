---
sidebar_position: 3
---

# 自定义配置

在`build`构建时，根据`loadAntsBundleConfig`获取配置

```typescript
const config =
  _options.config === false
    ? {}
    : await loadAntsBundleConfig(
        process.cwd(),
        _options.config === true ? undefined : _options.config
      )
```

```typescript
export async function loadAntsBundleConfig(
  cwd: string,
  configFile?: string
): Promise<{ path?: string; data?: ReturnType<typeof defineConfig> }> {
  const configJoycon = new JoyCon()
  const configPath = await configJoycon.resolve({
    files: configFile
      ? [configFile]
      : [
          'ants-bundle.config.ts',
          'ants-bundle.config.js',
          'ants-bundle.config.cjs',
          'ants-bundle.config.mjs',
          'ants-bundle.config.json',
          'package.json',
        ],
    cwd,
    stopDir: path.parse(cwd).root,
    packageKey: 'ants-bundle',
  })

  if (configPath) {
    if (configPath.endsWith('.json')) {
      let data = await loadJson(configPath)
      if (configPath.endsWith('package.json')) {
        data = data['ants-bundle']
      }
      if (data) {
        return { path: configPath, data }
      }
      return {}
    }

    const config = await bundleRequire({
      filepath: configPath,
    })
    return {
      path: configPath,
      data: config.mod['ants-bundle'] || config.mod.default || config.mod,
    }
  }

  return {}
}
```

使用`JoyCon`识别指定文件或 package.json 中的`ants-bundle`，作为相对用户配置项的返回。
