# Steps to write asssembly language:

Here are the general steps to write a program in assembly language:  
  - Choose an assembler: An assembler is a program that converts assembly language into machine code. There are many assemblers available for different platforms such as NASM, MASM, GAS, etc.  
  - Write the code: Assembly language is a low-level programming language that uses mnemonics to represent machine instructions. You need to write the code using these mnemonics.  
  - Assemble the code: Once you have written the code, you need to assemble it using the assembler. The assembler will convert your assembly code into machine code.  
  - Link the object file: After assembling the code, you will get an object file that contains machine code. You need to link this object file with other object files and libraries to create an executable file.  
  - Test the program: Once you have created the executable file, you can test it to see if it works as expected.

# GCC

GCC stands for GNU Compiler Collection. It is a collection of compilers and libraries for C, C++, Objective-C, Fortran, Ada, and other programming languages. GCC is used to compile source code into executable programs or libraries.
GCC works by taking the source code written in a high-level programming language such as C or C++ and translating it into machine code that can be executed by the computer’s processor. The process of compiling involves several stages such as preprocessing, parsing, optimization, assembly and linking 2.
Here is a brief overview of each stage:  
  - Preprocessing: In this stage, the preprocessor reads the source code and performs operations such as macro expansion and file inclusion.  
  - Parsing: The parser reads the preprocessed source code and checks it for syntax errors. It then generates an abstract syntax tree (AST) that represents the structure of the program.  
  - Optimization: The optimizer analyzes the AST and applies various transformations to improve the performance of the generated code.  
  - Assembly: The assembler generates assembly code from the optimized AST.  
  - Linking: The linker combines the assembly code with any necessary libraries to produce an executable program.

GCC is widely used in the software industry due to its portability, performance, and support for multiple programming languages.

----
C program: 
<code>
  char ch; 
  int main () { 
  scanf("%C",&Ch); 
  ch--; 
  printf ("\%c\n", ch); 
  return 0 ; }
</code>


Explain
This program declares a character variable ch and reads a character from the user using the scanf() function. It then decrements the value of ch by one and prints the result using the printf() function. Finally, it returns 0 to indicate successful execution .
-----
Compiling a C program into an assembly language file is a two-step process. First, you need to compile the C program into an object file using the -S flag. This will generate an assembly language file with the same name as your C program but with a .s extension. For example, if your C program is named program.c, the assembly language file will be named program.s. Here’s an example command to compile a C program into an assembly language file:

gcc -S program.c
This will generate an assembly language file named program.s. You can then use a text editor or an assembler to view and modify the assembly language code.

assembly language program example :

To read input from the user in assembly language, you can use the INT 21h interrupt. This interrupt is used to read a character from the keyboard buffer. The character is then stored in the AL register. Here is an example of how to read a character from the keyboard buffer:
<code>
mov ah, 01h ; function code for reading a character
int 21h ; call interrupt
  </code>
This code reads a single character from the keyboard buffer and stores it in the AL register. You can then use this value in your program as needed.

If you want to read an entire string from the user, you can use the INT 21h interrupt with function code 0Ah. This function reads a string of characters from the keyboard buffer and stores it in memory. Here is an example of how to read a string from the keyboard buffer:
<code>
mov ah, 0Ah ; function code for reading a string
mov dx, offset buffer ; address of buffer to store string
int 21h ; call interrupt</code>

This code reads a string of characters from the keyboard buffer and stores it in memory starting at the address specified by DX. The maximum length of the string is specified by the value in AL.

Another example:
In assembly language, the decrement operator is represented by the DEC instruction. The DEC instruction subtracts 1 from the operand and stores the result in the same location 1. Here is an example of how to use the DEC instruction in assembly language:
<code>
MOV AX, 5 ; Move the value 5 into register AX
DEC AX    ; Decrement the value in register AX by 1
  </code>
After executing these instructions, the value in register AX will be 4 
