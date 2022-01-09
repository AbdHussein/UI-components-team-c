

 export interface Iprops{
    input:string 
}

  /*const handleStyle = ({input}:Iprops) => {
      if(input ){

      }else if(){

      }
      else if(){

      }}*/

    export   const handleStyle = (width: string | number | undefined,height:string | number | undefined) => {
 if(width){
  switch (typeof width) {
    case "number":
      return width + "px";
    case "string":
      return width;
    default:
      return "210px";
  }}

if(height){
switch (typeof height) {
    case "number":
      return height + "px";
    case "string":
      return height;
    default:
      return "15px";
  }}

}