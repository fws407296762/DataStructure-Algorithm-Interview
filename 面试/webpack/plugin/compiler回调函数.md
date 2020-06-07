```
  hooks: {
    //开始处理静态资源之前出发，返回一个 trur/false 告诉用户是否处理
    shouldEmit: SyncBailHook {
    },
    //编译完成后就会执行
    done: AsyncSeriesHook {
    },
    additionalPass: AsyncSeriesHook {
    },
    beforeRun: AsyncSeriesHook {
    },
    run: AsyncSeriesHook {
    },
    emit: AsyncSeriesHook {
    },
    assetEmitted: AsyncSeriesHook {
    },
    afterEmit: AsyncSeriesHook {
    },
    thisCompilation: SyncHook {
    },
    compilation: SyncHook {
    },
    normalModuleFactory: SyncHook {
    },
    contextModuleFactory: SyncHook {
    },
    beforeCompile: AsyncSeriesHook {
    },
    compile: SyncHook {
    },
    make: AsyncParallelHook {
    },
    afterCompile: AsyncSeriesHook {
    },
    watchRun: AsyncSeriesHook {
    },
    failed: SyncHook {
    },
    invalid: SyncHook {
    },
    watchClose: SyncHook {
    },
    infrastructureLog: SyncBailHook {
    },
    environment: SyncHook {
    },
    afterEnvironment: SyncHook {
    },
    afterPlugins: SyncHook {
    },
    afterResolvers: SyncHook {
    },
    entryOption: SyncBailHook {
    },
    infrastructurelog: SyncBailHook {
    }
  },
```