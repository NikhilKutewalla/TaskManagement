import { async, TestBed } from '@angular/core/testing';
import { PieChartComponent } from './pie-chart.component';
import { ChartsModule } from 'ng2-charts';
describe('PieChartComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PieChartComponent],
            imports: [
                ChartsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PieChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pie-chart.component.spec.js.map