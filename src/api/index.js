// api文件夹下 各个请求模块js, 都统一来到index.js再向外导出

import {getSongById, getLyricById} from './Play'


export const getSongByIdAPI = getSongById // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById // 歌曲 - 歌词数据