## Setup TypeScript Codebase from scratch:-
## Initialize project
 npm init -y 

## Create main entry 
index.ts
Modify main in package.json as index.ts

## Create tsc config 
	First install typescript  before using tsc –init 
npx tsc – init  (it generate ts config file with default config)

## Create a dist folder 
	the build folder which contains all the files and folders which can be hosted on the server. The dist     folder contains the transpiled code of your angular application in the format of JavaScript and also the required html and css files

Configure build code in dist folder 
Go to ts-config and search for outDir and modify output folder 
output=”./dist”

Note- Don’t run tsc src/index.ts instead run  tsc      
 tsc

Install typescript dev dependency
            npm install @types/node

Note- In tsc-config module is configured as “common.js”  which is very that 
It compiles down the code so that every browser can understand even the older one not the just the modern browser JS Engine.

Note Here you may configure the module as “ES2022” it will have more optimized and compressed code. That you can select from the drop down. 


You may use ts-node to run the main
Ts-node ->   ts-node is a TypeScript execution engine and REPL for Node.js.
            It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on               Node.js without precompiling. This is accomplished by hooking node's module loading APIs, enabling it to be used seamlessly alongside other Node.js tools and libraries.
Npm i ts-node and configure in the package to run the command 
For example- 
“start”: “ts-node src/index.ts”
It do the same job compile the code and execute in a very fast fashion


Once you have ts-node configured in your codebase, you don’t need dist folder at it will do the same job under the hood without creating extra build code. 


## Note - If you want to use ES module import and export with ts-node and to execute the main i.e., index.ts 
Add following configuration in your tsconfig.json 
Module: “CommonJS”
 "allowSyntheticDefaultImports": true
For Example:- 
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}





  

 

