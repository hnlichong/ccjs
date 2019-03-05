### 对象属性访问表

|                         | `in` | `for..in` | `obj.hasOwnProperty` | `obj.propertyIsEnumerable` | `Object.keys` | `Object.getOwnPropertyNames` | `Object.getOwnPropertyDescriptors` | `Reflect.ownKeys()` |
| ----------------------- | ---- | --------- | -------------------- | -------------------------- | ------------- | ---------------------------- | ---------------------------------- | ------------------- |
| Enumerable              | true | true      | true                 | true                       | true          | true                         | true                               | true                |
| Nonenumerable           | true | false     | true                 | false                      | false         | true                         | true                               | true                |
| Symbols keys            | true | false     | true                 | true                       | false         | false                        | true                               | true                |
| Inherited Enumerable    | true | true      | false                | false                      | false         | false                        | false                              | false               |
| Inherited Nonenumerable | true | false     | false                | false                      | false         | false                        | false                              | false               |
| Inherited Symbols keys  | true | false     | false                | false                      | false         | false                        | false                              | false               |


