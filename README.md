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


# Javascript, react
바인딩 방법
방법1 - 생성자에서 바인딩 해주기
this.handleChange = this.handleChange.bind(this);
방법2 - 화살표 함수로 구현
handleChange = (props) => {
  ...
}
{this.state.*} *에 boolean 데이터같은것이 들어갈 경우엔 toString()을 추가해줘야 정상적으로 출력이된다.