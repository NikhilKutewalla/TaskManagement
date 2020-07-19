import { async, TestBed } from '@angular/core/testing';
import { PolarAreaChartComponent } from './polar-area-chart.component';
import { ChartsModule } from 'ng2-charts';
describe('PolarAreaChartComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PolarAreaChartComponent],
            imports: [
                ChartsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PolarAreaChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=polar-area-chart.component.spec.js.map