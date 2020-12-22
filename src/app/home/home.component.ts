
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Nation } from '../model/nation';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('changeOpacity', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('500ms'))
    ]),
  ]
})
export class HomeComponent implements OnInit,OnDestroy
{
    nations: Nation[] = [];
    hilitedName = '...';
    hilitedNativeName = '...';
    hilitedCapital = '...';
    hilitedLatitude = 0;
    hilitedLongitude = 0;
    hilitedFlag = '';
    hilitedFlagState = 'initial';

    @ViewChild("flag") flagRef!: ElementRef;

    constructor(
        private http:HttpClient,
        private changeDetectorRef:ChangeDetectorRef,
        private location: Location
        ) {}

    ngOnInit(): void {
        this.http.get<Nation[]>( 'assets/data.json' )
            .pipe()
            .subscribe( (nations:Nation[]) => {
                this.nations = nations ? nations : [];
                this.changeDetectorRef.detectChanges();
            } );
    }

    hilite( nation:Nation ) {
        this.location.replaceState('/home/'+nation.name);
        this.hilitedName = nation.name;
        this.hilitedNativeName = nation.nativeName;
        this.hilitedCapital = nation.capital;
        this.hilitedLatitude = nation.latlng[0];
        this.hilitedLongitude = nation.latlng[1];
        this.hilitedFlag = nation.flag;

        this.flagRef.nativeElement.setAttribute('src', this.hilitedFlag);
        this.changeState(true);
    }

    unhilite(){
        this.location.replaceState('/home');
        this.hilitedName = '...';
        this.hilitedNativeName = '...';
        this.hilitedCapital = '...';
        this.hilitedLatitude = 0;
        this.hilitedLongitude = 0;

        this.hilitedFlag = '';
        this.changeState(false);
    }

    changeState(change: boolean) {
        this.hilitedFlagState = change === true ? 'final' : 'initial';
    }
    
    ngOnDestroy(): void {
    }
}
