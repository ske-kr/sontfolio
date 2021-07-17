# sontfolio

- python manage.py runserver
- npm run dev

# Backend

- 1) django app basic settings - understanding urls, views, settings(especially urls)
  2) makemigrations - update for changing models, db( and first time when you boot up your app)
  3) basic models, views(rest_framework) understanding
  4) model data understandings

# Frontend
- 1) install basic tools, webpack, babel,react-dom, material-ui/core
  2) webpack, babel settings
  3) rendering mechanisms - components to components
  4) componentDidMount - 이번에는 함수를 만들고 따로 구현하진 않았지만 session값을 비교해서 re-rendering해줌(예를들어 최근에 방을만들었으면 홈페이지로 이동시 해당 방으로 이동)


# Javascript, react
바인딩 방법
방법1 - 생성자에서 바인딩 해주기
this.handleChange = this.handleChange.bind(this);
방법2 - 화살표 함수로 구현
handleChange = (props) => {
  ...
}
{this.state.*} *에 boolean 데이터같은것이 들어갈 경우엔 toString()을 추가해줘야 정상적으로 출력이된다.

fetch시 Json화 시키면 작업이 좀 더 편해진다!