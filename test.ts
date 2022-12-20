// // Команда для компиляций
// // tsc

/*******************************************Типы данных *************************************************/

// const a: number = 5; // переменная на ТС number  это мы обозначаем что будет хранится у нас в пер число или строка и т.д.
// let b = 'text'; //automatically type is string
// let c = true;   //automatically type is boolen

// // const d = a + c; //не правильная компиляция данных ошибка ее можно изменить в json но после компиляция будет не корректной 
// // ошибка что число не может соединится с булином

// let e: string[] = ['text', 'text2']; //если след значениям поставить 3, она является ошибкой потомучто мы указали тип данных как строчный массив

// let f: any = 3; // any не используеться в програмных сборках за частую , по сколку в дальшей программе мы не сможем определить его истинное значение что повлияет в дальнейшей разработке
// f = 'text';
// //a = 'text'; //error пред мы написали что а являеться числом но передаем ее как строку

// const test2 = (a: number): void =>{ //argument a should be number otherwise error, void is that function nothing to return
//     return;
// };

// function test(a: string): number | string { //  argument should be string and result should be number or string
//     return '';
// };

// e = e.map((x: string) => x.toLowerCase());  // maps argumets should be string and his methods have to string method

// function getSum(a: number | number[]) { // argument should be number or numbers array
//     if(Array.isArray(a)){   //if numbers array use this

//     }else if(typeof(a) === 'number'){   //if number use this

//     }
// }

// const x: undefined = undefined; //type undefined is undefind
// const z: null = null;   // type null is null

// let w: {a: string, b: string} = {   //type in object
//     a: 'qwe',
//     b: 'asd'
// };

// let l: {} = {   //type is object
//     name: 'Yernazar',
//     age: 23
// }


/**************************************************Типы интерфейсы и касты****************************************/

// function sum (arg: {x:number, y:number}) {
//     // так мы пишем по default-y
// }

// type Point = { //type
//     x: number,
//     y: number
// };

// interface IPoint {  //interface
//     x: number,
//     y: number
// };

// function res (arg: Point){  //use type default

// }
// function res2 (arg: IPoint) {   //to use interface dfault

// }

// //Different

// interface I3DPoint extends IPoint { //extends
//     z: number
// }

// type D3Point = Point & {    //intersection
//     z: number
// }

// interface Test {    // интерфейс может дополняться
//     a: number
// }

// interface Test {
//     b: number
// }

// // Cast

// const k = (point: IPoint) => {  // использовать как нам нужно если в IPoin x=1 y=2 то о равно 1,2,0
//     const o:I3DPoint = point as I3DPoint
// }

// const myCanvas = document.getElementById('canvas') as HTMLCanvasElement // Если по дефолту он ХТМЛ документ или нул а мы знаем что это канвас и используем брать этот элемент как канвас элемент 

/************************************* Написать interface соттветсвующий файлу test.json *****************************/

// interface Main {
//     userId: number;
//     id: number;
//     title: string;
//     info: Info;
//     tags: Tag[];
// }

// interface Info {
//     desc: string;
//     isActive: boolean;
// }

// interface Tag {
//     name: string;
//     value: number;
// }

/***************************************** Литеральные типы ****************************************/

// let as: 'test' = 'test';

// //with type

// type actionType = 'up' | 'down';

// function performAction (action: actionType): -1 | 1 {
//     switch(action){
//         case 'down':
//             return -1;
//         case 'up' :
//             return 1;
//     }
// };

// //with interface

// interface ComplexAction {
//     s: string;
// }

// function perAction (action: actionType | ComplexAction) {
//     switch(action){
//         case 'down':
//             return -1;
//         case 'up' :
//             return 1;
//     }
// };

/***************************** Enums *******************************/

//числовой
// enum Direction {
//     Up, //0 //if Up=1
//     Down,   //1 //2 
//     Left,   //2 //3
//     Right   //3 //4
// }

// //строковой
// enum Direct {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT'
// }

// //Гетерогенный
// enum Decision {
//     Yes = 1,
//     No = 'No'
// }

// //Расчетный

// function calcEnum() {
//     return 2;
// }

// enum Decis {
//     Yes = 1,
//     No = calcEnum()
// }

// // использовать как обьект

// function runEnum (obj: {Up: string}) {

// }

// runEnum(Direct);

// // обратный мапинг

// enum Test1 {
//     A
// }

// let test1 = Test1.A; //0
// let nameA = Test1[test1] //A

// // enum константа

// const enum ConstEnum {
//     A, //0
//     B //1
// }

// let con = ConstEnum.A //0
// //js const con = 0;

// //never

// enum Dice {
//     One = 1,
//     Two,
//     Three
// }

// function ruDice(dice: Dice) {
//     switch(dice) {
//         case Dice.One:
//             return 'Один';
//         case Dice.Two:
//             return 'Два';
//         case Dice.Three:
//             return 'Три';
//         default:
//             const a: never = dice; //never это тогда пока все enum не будут опубликованны наш свитч не будет работать
//     }
// }


/********************************* Tuple **************************************/



// const a: [number, string, number] = [0, 'a', 1];

// //добавление эллемента в кортеж

// //a.push(3);  // но изменение не допустимы

// // error 
// // a[3];

// // с методом map

// a.map(s => {
//     switch (typeof s) {
//         case 'string':
//             //
//             break;
//     }
// });

// // назначение переменных исходя шаблона
// const [c, d, f] = a;    // c = number, d = string, f = number

// const [t, ...v] = a;    // t = number, ...v = [string, number]



/****************************** Generics *****************************************/

// function logTime<T>(num: T): T {
//     return num;
// }

// logTime<string>('two');
// logTime<number>(2);

// function logTime2<T>(num: T): T {
//     if(typeof num == 'string') {
//         num.lastIndexOf;
//     };
//     return num;
// };

// // Interface

// interface MyInterface {
//     transform: <T>(a: T) => T;
//     transformX: <T, F>(a: T) => F;
// }

// //class

// class MyGenClass<T> {
//     value: T;
// }

// const a = new MyGenClass <number>();
// a.value;

// // interface in function

// interface TimeStamp {
//     stamp: number;
// }

// function logTimeStamp <T extends TimeStamp> (num: T): T {
//     console.log(num.stamp);
//     return num;
// }


/******************************************* JSX ***********************************/
// create .jsx or .tsx file