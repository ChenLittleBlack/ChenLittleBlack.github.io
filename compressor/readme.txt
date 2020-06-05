YUICompressor版本：2.4.8

用法：java -jar yuicompressor-2.4.8.jar [选项] [输入文件]

全局选项
  -V，--version打印版本信息
  -h，--help显示此信息
  --type <js | css>指定输入文件的类型
  --charset <字符集>使用<字符集>读取输入文件
  --line-break <列>在指定的列号后插入换行符
  -v，--verbose显示参考消息和警告
  -o <文件>将输出放入<文件>。默认为标准输出。
    可以使用以下语法处理多个文件：
    java -jar yuicompressor.jar -o'.css $：-min.css'* .css
    java -jar yuicompressor.jar -o'.js $：-min.js'* .js

JavaScript选项
  --nomunge仅缩小，请勿混淆
  --preserve-semi保留所有分号
  --disable-optimizations禁用所有微优化