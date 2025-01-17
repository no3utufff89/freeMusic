import { LucideIcon } from 'lucide-react';
//Menu Types
export type AsideMenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  iconColor: string;
};
//Data types
export interface SongData {
  album_id: string,
  album_image: string,
  album_name: string,
  artist_id: string,
  artist_idstr: string,
  artist_name: string,
  audio: string,
  audiodownload: string,
  audiodownload_allowed: boolean,
  duration: number,
  id: string,
  image: string,
  license_ccurl: string,
  name: string,
  position: number,
  prourl: string | undefined,
  releasedate: string,
  shareurl: string,
  shorturl: string
  songSerialNumber: number,
}
//Common Response Headers
export interface ResponseHeaders {
  status: string,
  code: number,
  error_message: string,
  warnings: string,
  results_count: number,
  next: string,
}
//SomeRadioType RESPONSE
export interface RadioResultsResponseItem {
id: number,
names: string,
dispname: string,
type: string,
image: string,
}
export interface ArtistDataType {
  id: string,
  name: string,
  website: string,
  joindate: string,
  image: string,
  shorturl: string,
  shareurl: string,
}
//Common DATA response generic type
export interface CommonResponseType<T> {
  headers: ResponseHeaders,
  results: T[],
}

//Main PageRecomendations
export interface DefaultResponseType {
  headers: ResponseHeaders,
  results:  SongData[],
  }
  //Radio
  export interface RadioResponse {
    headers: ResponseHeaders,
    results: RadioResultsResponseItem[],

  }
  //StoreTypes
  export interface DefaultStateType<T> {
    loading: boolean;
    data: {
      topChartData?: T | null,
      weekChartData?: T | null,
      radioData?: T | null,
      artistsData?: T | null,
    };
  }
  export interface PlaylistType<T> {
    songs?: T[],
    currentSongIndex?: number | undefined,
    isPlaying: boolean,
    isLooping: boolean,
    currentSong: T | null,
    isActive: boolean,
  }
  export type Chartprops = {
    title: string,
    subtitle: string,
    data?: SongData[] | undefined,
}
export type Artistsprops = {
  data?: ArtistDataType[] | undefined
}
//UI Types
export type SliderBtnType = {
  text?: string,
  title?: string,
  iconColor?: string,
  iconSize?: string,
  active: boolean,
  type: 'left' | 'right',
  handleClick: () => void,
}
export type VibeBtnPropsType = {
  text?: string,
  title?: string,
  active?: boolean,
  name: string,
}
export interface MusicGenresDataType {
  name: string,
  value: string,
  label: string,
  icon: string,
}
