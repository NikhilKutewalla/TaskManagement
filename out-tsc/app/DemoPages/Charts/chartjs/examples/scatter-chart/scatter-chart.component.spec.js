import { async, TestBed } from '@angular/core/testing';
import { ScatterChartComponent } from './scatter-chart.component';
import { ChartsModule } from 'ng2-charts';
describe('ScatterChartComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ScatterChartComponent],
            imports: [
                ChartsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ScatterChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=scatter-chart.component.spec.js.map