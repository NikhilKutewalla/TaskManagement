import { async, TestBed } from '@angular/core/testing';
import { RadarChartComponent } from './radar-chart.component';
import { ChartsModule } from 'ng2-charts';
describe('RadarChartComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RadarChartComponent],
            imports: [
                ChartsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RadarChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=radar-chart.component.spec.js.map