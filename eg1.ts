import { of } from 'rxjs';

// of将生成一个可观察流，流中的数据个数为of参数个数
of(10, 20, 30)
  // 通过subscribe方法观察了这个流
  .subscribe(
    // 观察者是一个方法标准观察者对象，包含 next, error, complete 方法的对象
    {
      next: (value) => console.log('next:', value),
      error: (err) => console.log('error:', err),
      complete: () => console.log('the end'),
    }
  );

// Outputs
// next: 10
// next: 20
// next: 30
// the end
