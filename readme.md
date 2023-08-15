# Rxjs 创建型操作符 of

转换参数为可观察序列流；

## type

`of<T>(...args: (SchedulerLike | T)[]): Observable<T>`


### 参数：

- `args	(SchedulerLike | T)[]`	

要发出流数据参数列表，每一个参数将作为一个流数据项在可观察流中。

### Returns

`Observable<T>`: 一个同步将流数据项发出后便立即完成的可观察流.


## 例子1

```typescript
import { of } from 'rxjs';
 
of(10, 20, 30)
  .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });
 
// Outputs
// next: 10
// next: 20
// next: 30
// the end
```

## 例子2

```typescript
import { of } from 'rxjs';
 
of([1, 2, 3])
  .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });
 
// Outputs
// next: [1, 2, 3]
// the end
```