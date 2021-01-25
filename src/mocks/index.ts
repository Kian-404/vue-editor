import * as Mock from 'mockjs'

import { homeList } from './homeList';

Mock.mock(/\/api\/homeList/, 'get', homeList);