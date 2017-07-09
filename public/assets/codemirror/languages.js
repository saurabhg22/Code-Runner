var languages = [
    {
        mode:           'text/x-csrc',

        defaultCode:    "#include<stdio.h>\n\n" +
                        "int main(){\n" +
                        "    printf(\"Hello World\");\n" +
                        "    return 0;\n" +
                        "}",
        code: 1,
        name: "C"
    },

    {
        mode:           'text/x-c++src',

        defaultCode:    "#include<iostream>\n" +
                        "using namespace std;\n\n" +
                        "int main(){\n" +
                        "    cout<<\"Hello World\";\n" +
                        "    return 0;\n" +
                        "}",
        code: 2,
        name: "C++"
    },

    {
        mode:           'text/x-csharp',

        defaultCode:    "using System;\n" +
                        "using System.Collections.Generic;\n" +
                        "using System.IO;\n\n" +
                        "class Solution {\n" +
                        "    static void Main(String[] args) {\n" +
                        "        Console.WriteLine(\"Hello World\");\n" +
                        "    }\n" +
                        "}",
        code: 9,
        name: "C#"
    },

    {
        mode:           'text/x-d',

        defaultCode:    "import std.stdio;\n\n" +
                        "void main() {\n" +
                        "    writeln(\"Hello World\");\n" +
                        "}",

        code: 22,
        name: "D"
    },

    {
        mode:           'text/x-fortran',

        defaultCode:    "PROGRAM main\n" +
                        "    IMPLICIT NONE\n\n" +
                        "    write ( *, '(a)' ) 'Hello World'\n" +
                        "END PROGRAM main",

        code: 54,
        name: "Fortran"
    },

    {
        mode:           'text/x-go',

        defaultCode:    "package main\n" +
                        "import \"fmt\"\n\n" +
                        "func main() {\n" +
                        "    fmt.Println(\"Hello World\")\n" +
                        "}",

        code: 21,
        name: "Go"
    },

    {
        mode:           'haskell',

        defaultCode:    "main = do\n" +
                        "    print \"Hello World\"",

        code: 12,
        name: "Haskel"
    },

    {
        mode:           'text/x-java',

        defaultCode:    "public class HelloWorld {\n" +
                        "    public static void main(String[] args) {\n" +
                        "        System.out.println(\"Hello, World\");\n" +
                        "    }\n" +
                        "}",
        code: 3,
        name: "Java"
    },

    {
        mode:           'javascript',

        defaultCode:    "console.log(\"Hello World\");",
        code: 20,
        name: "Javascript"
    },

    {
        mode:       'text/x-objectivec',
        defaultCode:    "#import <Foundation/Foundation.h>\n\n" +
                        "int main (int argc, const char * argv[]) {\n" +
                        "    NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];\n" +
                        "    printf(\"Hello World\");\n" +
                        "    [pool drain];\n" +
                        "    return 0;\n" +
                        "}",
        code: 32,
        name: "Objective-C"
    },

    {
        mode:       'text/x-perl',
        defaultCode:    "print \"Hello World\";",
        code: 6,
        name: "Perl"
    },

    {
        mode:       'text/x-php',
        defaultCode:    "<?php\n" +
                        "    echo \"Hello World\";\n" +
                        "?>",
        code: 7,
        name: "PHP"
    },

    {
        mode:       'python',
        defaultCode:    "print \"Hello World\"",
        code: 5,
        name: "Python 2"
    },

    {
        mode:       'text/x-rsrc',
        defaultCode:    "print(\"Hello World\")",
        code: 24,
        name: "R"
    },

    {
        mode:       'text/x-ruby',
        defaultCode:    "print(\"Hello World\")",
        code: 8,
        name: "Ruby"
    },

    {
        mode:       'text/x-scala',
        defaultCode:    "object Solution {\n" +
                        "    def main(args: Array[String]) {\n" +
                        "        println(\"Hello World\")\n" +
                        "    }\n" +
                        "}",
        code: 15,
        name: "Scala"
    },

    {
        mode:       'text/x-swift',
        defaultCode:    "print(\"Hello World\")",
        code: 51,
        name: "Swift"
    }
]







var themes = [
    {
        value:  'default',
        name: 'Default'
    },
    {
        value:  'ambiance',
        name: 'Ambiance'
    },
    {
        value:  'blackboard',
        name: 'Blackboard'
    },
    {
        value:  'cobalt',
        name: 'Cobalt'
    },
    {
        value:  'colorforth',
        name: 'Colorforth'
    },
    {
        value:  'dracula',
        name: 'Dracula'
    },
    {
        value:  'eclipse',
        name: 'Eclipse'
    },
    {
        value:  'elegant',
        name: 'Elegant'
    },
    {
        value:  'hopscotch',
        name: 'Hopscotch'
    },
    {
        value:  'icecoder',
        name: 'Icecoder'
    },
    {
        value:  'isotope',
        name: 'Isotope'
    },
    {
        value:  'material',
        name: 'Material'
    },
    {
        value:  'midnight',
        name: 'Midnight'
    },
    {
        value:  'monokai',
        name: 'Monokai'
    },
    {
        value:  'neat',
        name: 'Neat'
    },
    {
        value:  'neo',
        name: 'Neo'
    },
    {
        value:  'night',
        name: 'Night'
    },
    {
        value:  'panda-syntax',
        name: 'Panda Syntax'
    },
    {
        value:  'paraiso-dark',
        name: 'Paraiso Dark'
    },
    {
        value:  'paraiso-light',
        name: 'Paraiso Light'
    },
    {
        value:  'pastel-on-dark',
        name: 'Pastel on Dark'
    },
    {
        value:  'solarized dark',
        name: 'Solarized Dark'
    },
    {
        value:  'solarized light',
        name: 'Solarized Light'
    },
    {
        value:  'the-matrix',
        name: 'The Matrix'
    },
    {
        value:  'twilight',
        name: 'Twilight'
    }
];


var prevLang = 0;


