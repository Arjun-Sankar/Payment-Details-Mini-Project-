import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering',
  pure:false
})
export class FilteringPipe implements PipeTransform {

  transform(value: any[],searchdata:any, filterby: any): any {
    if(!searchdata){
      return value;
    }
  else if(filterby=="uname"){
    const resultArr: any[]=[]
     value.filter(function(val,ind,arr){
      if(arr[ind].uname.includes(searchdata)){
        resultArr.push(arr[ind]);
      }
    })
    return resultArr;
    }
    else if(filterby=="cardno"){
      const resultArr: any[]=[]
       value.filter(function(val,ind,arr){
        if(arr[ind].cardno.toString().includes(searchdata.toString())){
          resultArr.push(arr[ind]);
        }
      })
      return resultArr;
      }
      else if(filterby=="amt"){
        const resultArr: any[]=[]
         value.filter(function(val,ind,arr){
          if(arr[ind].amt.toString()==searchdata.toString()){
            resultArr.push(arr[ind]);
          }
        })
        return resultArr;
        }
  }

}
