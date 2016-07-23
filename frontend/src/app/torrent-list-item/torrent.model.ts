export class TorrentModel {
  id: string;
  name: string;
  status: TorrentStatus;
  location: string;
}

enum TorrentStatus {
  NotStarted,
  InProgress,
  Complete
};