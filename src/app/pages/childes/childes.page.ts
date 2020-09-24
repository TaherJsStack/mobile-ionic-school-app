import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
// import { LoginService } from '../providers/login.service';
import { ChartDataSets } from 'chart.js';
// import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/providers/login.service';

@Component({
  selector: 'app-childes',
  templateUrl: './childes.page.html',
  styleUrls: ['./childes.page.scss'],
})
export class ChildesPage  implements OnInit, OnDestroy {

  displayedColumns: string[] = ['position', 'name', 'teacher' ];
  dataSource;

  subjectsLenght = 0;
  tearmSubjects;

  classAttend;
  busAttend;
  
  classTimesData = [];
  classAllMonth = [];
  busTimesData = [];
  busAllMonth = [];

  Subscription: Subscription;
  studentData;
  // Data
  chartData: ChartDataSets[] = [{ data: [], label: 'Stock price' }];
  // chartLabels: Label[];
  //  // Options
  //  chartOptions = {
  //   responsive: true,
  //   title: {
  //     display: true,
  //     text: 'Historic Stock price'
  //   },
  //   pan: {
  //     enabled: true,
  //     mode: 'xy'
  //   },
  //   zoom: {
  //     enabled: true,
  //     mode: 'xy'
  //   }
  // };
  // chartColors: Color[] = [
  //   {
  //     borderColor: '#000000',
  //     backgroundColor: '#ff00ff'
  //   }
  // ];
  chartType = 'line';
  showLegend = false;
  spinner: boolean= true;
  // For search
  stock = '';

  constructor(  private http: HttpClient,
                private route: ActivatedRoute, 
                private LoginService: LoginService, 
              ) { }

  ngOnInit() {

    console.log('==============================> ChildPage <======================================')

    this.route.paramMap
    .subscribe( (paramMap: ParamMap ) => {
      if ( paramMap.has('id') ) {
        // console.log('paramMap stage --', paramMap.get('stage'))
          console.log('paramMap id --', paramMap.get('id'))
          this.Subscription = this.LoginService.getStudent(paramMap.get('id'))
          .subscribe( studentData => {
            console.log('student found =>', studentData)
            this.studentData = studentData;

            console.log('this.studentData.class.subjects  =>', this.studentData.class.subjects.length)
            if (this.studentData.class.subjects.length > 0) {
              let fTearm  = this.studentData.class.subjects[0].termSubjects[0].classSubjects.length;
              let lTearm  = this.studentData.class.subjects[1].termSubjects[0].classSubjects.length;
              let data  = this.studentData.class.subjects.filter(subjects => subjects.term == 'first term' )
              this.dataSource = data[0].termSubjects[0].classSubjects;
              this.subjectsLenght = fTearm + lTearm;
            } else {
              this.subjectsLenght = 0;
            }
            console.log('subjects length',this.subjectsLenght)
          })

        // grt student attend
          this.Subscription = this.LoginService.getStudentAttend(paramMap.get('id'))
          .subscribe( studentAttendData => {
            console.log('student Attend Data found =>', studentAttendData)
            this.classAttend = studentAttendData.classAttend;
            this.busAttend   = studentAttendData.busAttend;
            this.spinner = false;

            let  classTimesData = [];
            let  classAllMonth = [];
            let  busTimesData = [];
            let  busAllMonth = [];
            this.classTimesData = classTimesData = [];
            this.classAllMonth = classAllMonth = [];
            this.busTimesData =  busTimesData = [];
            this.busAllMonth = busAllMonth = [];

            let jsonData = studentAttendData.classAttend;
            let jsonDataBus = studentAttendData.busAttend;
            if (this.classAttend.length > 0) {
              Object.keys(jsonData).forEach(function(key) {
                var month = jsonData[key].month;
                var day   = jsonData[key].day;
                classTimesData.push({month: month, day: day})
                let monthLength = classTimesData.filter( data => data.month == month ).length;
                  if (monthLength == 1) {
                    classAllMonth.push(month);
                  }
              })              
            }
            if (this.busAttend.length > 0) {
              Object.keys(jsonDataBus).forEach(function(key) {
                var month = jsonDataBus[key].month;
                var day   = jsonDataBus[key].day;
                busTimesData.push({month: month, day: day})
                let monthLength = busTimesData.filter( data => data.month == month ).length;
                  if (monthLength == 1) {
                    busAllMonth.push(month);
                  }
              })              
            }
            // console.log('this.classTimesData  =>', this.classTimesData)
            // console.log('this.classAllMonth  =>', this.classAllMonth)
            // console.log('this.busTimesData  =>', this.busTimesData)
            // console.log('this.busAllMonth  =>', this.busAllMonth)
          })

        } else {
          console.log('paramMap --')
        }
      });
  }


  segmentChanged(e) {
    console.log('segmentChanged =>', e.detail.value)
    let data  = this.studentData.class.subjects.filter(subjects => subjects.term == e.detail.value )
    this.dataSource = data[0].termSubjects[0].classSubjects;
    console.log('=>>>>>>>>>> d', this.dataSource)
  }


  // char function
  getData() {
    this.http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}?from=2018-03-12&to=2019-03-12`).subscribe(res => {
    const history = res['historical'];

    // this.chartLabels = [];
    // this.chartData[0].data = [];

    // for (let entry of history) {
    //   this.chartLabels.push(entry.date);
    //   this.chartData[0].data.push(entry['close']);
    // }
  });
  }
  // char function
  typeChanged(e) {
    const on = e.detail.checked;
    this.chartType = on ? 'line' : 'bar';
  }


  ngOnDestroy() {
    this.Subscription.unsubscribe()
  }


}

