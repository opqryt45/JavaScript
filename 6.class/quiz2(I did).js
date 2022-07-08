// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원
class Job {
  constructor(name, partName, workingHour ,price) {
    this.name = name;
    this.partName = partName;
    this.workingHour = workingHour;
    console.log(workingHour * price)
  }
}



/* class FullTimeJob extends Job {
  super(workingHour);
} */
const fullTimeJob = new Job('heesan','business',200,10000);//new FullTimeJob('heesan', 'Business', 200 , 10000);
console.log(fullTimeJob);
fullTimeJob.name;
fullTimeJob.partName;
fullTimeJob.workingHour;
fullTimeJob.price;

/* class PartTimeJob extends Job {} */
const partTimeJob = new Job();//new PartTimeJob('ellie', 'management', 220 , 8000);
console.log(partTimeJob);
partTimeJob.name;
partTimeJob.partName;
partTimeJob.workingHour;
partTimeJob.price;
