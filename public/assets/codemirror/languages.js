var languages = [
    {
        mode:           'text/x-csrc',

        defaultCode:    "#include<stdio.h>\n\n" +
                        "int main(){\n" +
                        "    printf(\"Hello World\");\n" +
                        "    return 0;\n" +
                        "}",
        code: 'C',
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
        code: 'CPP',
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
        code: 'CSHARP',
        name: "C#"
    },


    {
        mode:           'text/x-go',

        defaultCode:    "package main\n" +
                        "import \"fmt\"\n\n" +
                        "func main() {\n" +
                        "    fmt.Println(\"Hello World\")\n" +
                        "}",

        code: 'GO',
        name: "Go"
    },

    {
        mode:           'haskell',

        defaultCode:    "main = do\n" +
                        "    print \"Hello World\"",

        code: 'HASKELL',
        name: "Haskel"
    },

    {
        mode:           'text/x-java',

        defaultCode:    "public class HelloWorld {\n" +
                        "    public static void main(String[] args) {\n" +
                        "        System.out.println(\"Hello, World\");\n" +
                        "    }\n" +
                        "}",
        code: 'JAVA',
        name: "Java"
    },

    {
        mode:           'javascript',

        defaultCode:    "console.log(\"Hello World\");",
        code: 'JAVASCRIPT_NODE',
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
        code: 'OBJECTIVEC',
        name: "Objective-C"
    },

    {
        mode:       'text/x-perl',
        defaultCode:    "print \"Hello World\";",
        code: 'PERL',
        name: "Perl"
    },

    {
        mode:       'text/x-php',
        defaultCode:    "<?php\n" +
                        "    echo \"Hello World\";\n" +
                        "?>",
        code: 'PHP',
        name: "PHP"
    },

    {
        mode:       'python',
        defaultCode:    "print \"Hello World\"",
        code: 'PYTHON',
        name: "Python 2"
    },
    {
        mode:       'python',
        defaultCode:    "print(\"Hello World\")",
        code: 'PYTHON3',
        name: "Python 3"
    },

    {
        mode:       'text/x-rsrc',
        defaultCode:    "print(\"Hello World\")",
        code: 'R',
        name: "R"
    },

    {
        mode:       'text/x-ruby',
        defaultCode:    "print(\"Hello World\")",
        code: 'RUBY',
        name: "Ruby"
    },

    {
        mode:       'text/x-scala',
        defaultCode:    "object Solution {\n" +
                        "    def main(args: Array[String]) {\n" +
                        "        println(\"Hello World\")\n" +
                        "    }\n" +
                        "}",
        code: 'SCALA',
        name: "Scala"
    },

    {
        mode:       'text/x-swift',
        defaultCode:    "print(\"Hello World\")",
        code: 'SWIFT',
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


