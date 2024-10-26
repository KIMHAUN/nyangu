import HomeScreen from '../home/HomeViewContainer';
import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import PagesScreen from '../pages/PagesViewContainer';
import ComponentsScreen from '../components/ComponentsViewContainer';

const iconHome = require('../../../assets/images/tabbar/home.png');
const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../../assets/images/tabbar/grids.png');
const iconPages = require('../../../assets/images/tabbar/pages.png');
const iconComponents = require('../../../assets/images/tabbar/components.png');

const tabNavigationData = [
  {
    name: '검색',
    component: GridsScreen,
    icon: iconGrids,
  },
  {
    name: '꾸구의 일정',
    component: CalendarScreen,
    icon: iconCalendar,
  },
  {
    name: '도란',
    component: HomeScreen,
    icon: iconHome,
  },
  {
    name: '솔깃',
    component: PagesScreen,
    icon: iconPages,
  },
  {
    name: '꾸구 정보',
    component: ComponentsScreen,
    icon: iconComponents,
  },
];

export default tabNavigationData;