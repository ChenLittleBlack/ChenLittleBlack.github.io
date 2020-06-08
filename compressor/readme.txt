YUICompressor版本：2.4.8

用法：java -jar yuicompressor-2.4.8.jar [选项] [输入文件]

全局选项
-h, --help
    Prints help on how to use the YUI Compressor
    打印有关如何使用YUI Compressor的帮助

--line-break
    Some source control tools don't like files containing lines longer than,
    say 8000 characters. The linebreak option is used in that case to split
    long lines after a specific column. It can also be used to make the code
    more readable, easier to debug (especially with the MS Script Debugger)
    Specify 0 to get a line break after each semi-colon in JavaScript, and
    after each rule in CSS.
    某些源代码管理工具不喜欢包含超过8000个字符的行的文件。
    在这种情况下，可以使用换行选项在特定列之后分割长行。
    它还可以用于使代码更具可读性，更易于调试（尤其是使用MS Script Debugger）。
    指定0以在JavaScript中的每个分号之后和CSS中的每个规则之后获得换行符。

--type js|css
    The type of compressor (JavaScript or CSS) is chosen based on the
    extension of the input file name (.js or .css) This option is required
    if no input file has been specified. Otherwise, this option is only
    required if the input file extension is neither 'js' nor 'css'.
    根据输入文件名的扩展名（.js或.css）选择压缩器的类型（JavaScript或CSS）。
    如果未指定输入文件，则需要此选项。否则，仅当输入文件扩展名既不是“js”也不是“css”时才需要此选项。

--charset character-set
    If a supported character set is specified, the YUI Compressor will use it
    to read the input file. Otherwise, it will assume that the platform's
    default character set is being used. The output file is encoded using
    the same character set.
    如果指定了受支持的字符集，则YUI Compressor将使用它来读取输入文件。
    否则，将假定正在使用平台的默认字符集。输出文件使用相同的字符集编码。

-o outfile
    Place output in file outfile. If not specified, the YUI Compressor will
    default to the standard output, which you can redirect to a file.
    Supports a filter syntax for expressing the output pattern when there are
    multiple input files.  ex:
        java -jar yuicompressor.jar -o '.css$:-min.css' *.css
    ... will minify all .css files and save them as -min.css
    将输出放在文件输出文件中。如果未指定，则YUI Compressor将默认为标准输出，
    您可以将其重定向到文件。支持过滤器语法，用于在有多个输入文件时表示输出模式。
    例如：
        java -jar yuicompressor.jar -o '.css$:-min.css' *.css ...
        将缩小所有.css文件并将其另存为-min.css

-v, --verbose
    Display informational messages and warnings.
    显示参考消息和警告。

JavaScript选项
--nomunge
    Minify only. Do not obfuscate local symbols.
    仅缩小。不要混淆本地符号。

--preserve-semi
    Preserve unnecessary semicolons (such as right before a '}') This option
    is useful when compressed code has to be run through JSLint (which is the
    case of YUI for example)
    保留不必要的分号（例如，紧接在“}”之前），该选项在必须通过JSLint运行压缩代码时非常有用（例如，YUI）

--disable-optimizations
    Disable all the built-in micro optimizations.
    禁用所有内置的微优化。