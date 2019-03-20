export enum MediaType {

  Audio, Video, Text, Image, Drawing, Executable, Binary, Unknown

}

export const MediaIcons = new Map<number, string>([

  [MediaType.Audio, 'audiotrack'],
  [MediaType.Video, 'video_label'],
  [MediaType.Text, 'text_format'],
  [MediaType.Image, 'images'],
  [MediaType.Drawing, 'images'],
  [MediaType.Executable, 'audiotrack'],
  [MediaType.Binary, 'audiotrack'],
  [MediaType.Unknown, 'audiotrack']


]);
