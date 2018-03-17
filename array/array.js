   // splice 拼接 -> 先删除再添加
   var arr = [3, 4, 2, 'a']
   //1。删除
   arr.splice(1, 2)
   arr
   //2. 添加
   arr.splice(1, 0, 'f', 23, 12)
   arr
   //3. 先删除后添加
   arr.splice(1, 3, 'add', '7')
   arr
