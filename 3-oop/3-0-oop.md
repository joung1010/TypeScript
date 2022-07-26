### OOP : Object Oriented Programming  
객체지향 프로그래밍이란 프로그래밍 패러다임중 하나이다.  
이때 패러다임이라 하면 프로그래밍을 하는 여러가지 방식중 하나이다.  
즉 , **객체들을 중심으로 프로그래밍을 하는 방식**을 말한다.  
여기서 말하는 객체란, **여러가지 데이터나 코드를 묶을 수 있는 것**을 말한다.  

### 객체지향 개념 정리  
#### 명령 과 절차 지향 프로그래밍  
어떠한 애플리케이션을 만든다고 할때 data 와 함수 위주로 코딩하는 것을 말한다.  
```
                           main
                   ↙            ↘
              fun play()          fun startTImer()  
               ↙     ↘                  ↙          ↘
        fun load()  fun prepare()     fun init()    fun start()
                                         ↓
                                       fun read 
             ↙        ↓                   ↘
                                       
        data1       data2           data 3                                          
```  
main 함수 안에서 play 와 startTimer 함수를 호출할 수 있고  
이 각각의 함수들안에 또다른 여러함수들을 호출할 수 있다.  
이 함수 내부에서는 전역적으로 설정한 data1, data2 , data3 변수에 접근할 수 있다.  
이처럼, 함수가 정의된 순서대로 절차대로 함수가 호출되는 형식을 **절차지향적 프로그래밍**이라고 한다.  
  
절차지향적 프로그래밍에 단점  
1. 유지보수가 어렵다    
함수가 서로 복잡하게 얽혀있고 데이터도 다른곳에서 업데이트될 수 있기때문에    
전체적인 애플리케이션을 이해하고 있어야만 한다.  
2. 사이드 이팩트가 발생할 확률이 높다. 
3. 한눈에 애플리케이션을 이해하기가 어렵다.    
  
#### 객체지향 프로그래밍  
프로그램을 객체로 정의해서 객체들끼리 서로 의사소통하도록 디자인 하고 코딩하는 것  
즉, **서로 관련있는 데이터나 함수를 객체로 정의해서 프로그래밍 하는 것을 말한다.**  
때문에 어떠한 부분에서 문제가 발생했을때 해당 객체만 이해하고 수정하면 되기때문에  
**유지보수가 편리하고** 여러번 반복되는 것을 객체로 재정의해서 **재사용성을** 높일 수 도 있다.  
또한 새로운 기능이 추가되면 그 해당 객체를 만들어서 추가하기 때문에 **확장성도 좋다.**  
  
객체란 관련 **데이터 와 함수로 구성되어 있다.**  
```
MediaPlayer -->  data : music
                function : play, stop

```  
뮤직 플레이어 객체는 음악 데이터와 실행과 중지 함수로 이루어졌다.  
이처럼 객체는 우리 주변에서 볼 수 있는 학생, 은행, 등 다양한 객체를 선정해서  
구성할 수 있다.  
이렇게 우리가 일상생활에서 볼 수 있는것 뿐만아니라  
프로그래밍을 하면서 만날 수 있는 좀 추상적인 **Error, Exception Event**등도  
객체로 만들어서 관리할 수 있다.  
그래서 객체의 이름은 **명사로** 그리고 객체안에 데이터를 **fields**, 함수들은 **methods**라고 부란다.  
  
이러한 객체는 **class**라는 것으로 정의를 한다  
이 클래스는 객체가 이러한 형태로 생겼어 라고 정의하는 템플릿 과 유사하다.  
실제로 클래스에 데이터를 넣어서 만다는 것을 **객체**라고 한다.  

### 객체지향 원칙  
  
#### 객체지향의 4가지 원칙  
1. 캡슐화 Encapsulation
2. 추상화 Abstraction
3. 상속 Inheritance
4. 다형성 Polymorphism  
  
#### 캡슐화  
서로 관련있는 데이터나 함수를 객체에 담아두고  
외부에 노출하지 않아도 되는 데이터를 잘 숨겨둠으로써 캡슐화를 할 수 있다.  
즉, **어떤 연관있는 데이터를 객체로 만들 것인지**,**어떤 데이터를 노출할 것인지**를 고려해야 한다.  
  
예를 들어 고양이가 있는데 고양이한테 외부에서 배고파해, 행복해해, 이제 피곤해해 와 같이  
고양이 내부의 상태를 외부에서 설정할 수 없다.  
고양이의 행복,슬픔,피곤,배고픔등 상태는 고양이 내부에 있는 상태가 된다.  
단, 외부에서 놀아주고 먹이를 줌으로써 고양이의 상태를 변경할 수 는 있다.  
즉, 외부에서 직접적으로 상태를 변경할 수는 없지만 **외부행동(함수)등**을 통해 내부 상태를  
변경할 수 있다.  
  
#### 추상화  
내부의 복잡한 기능을 이해하지않고 외부에서 간단한 인터페이스를 통해서  
어떤 기능을 쉽게 사용할 수 있는 것을 말한다.  
예를들어 커피머신에서 커피머신이 어떻게 커피를 추출하는지 내부 로직을 알지 못해도  
그냥 단순히 버튼을통해 커피를 추출할 수 있다.  
  
#### 상속  
내가 커피머신이라는 클래스를 만들면 이클래스를 활용해서 다양한 기능을추가해서  
다른 커피머신을 만들 수 있다.(에스프레소 머신, 라떼 커피 머신등)  
이렇게 상속의 관계를 부모 자식, super sub, base derived 관계라고 한다.  
또 이 관계를 IS - A 관계라고도 하는데  
그이유는 에스프레소 머신은 커피머신이고, 라떼 커피 머신도 커피머신이다.  
즉, **상속을 받은 자식클래스는 바로 부모 클래스라고 말할 수 있기때문이다.**   
```
                EventTarget
                     |
                    Node
        /             |         \
  Document        Element       Text
                     |
                HTMLElement
```  
  
#### 다형성  
animal 이라는 class 가 있고 이를 상속받은 호랑이, 고양이, 사자가 있으면  
이 호랑이, 고양이, 사자 객체는 animal 을 class를 통해서 공통의 함수를 호출할 수 있다.  




