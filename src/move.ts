export type File = {
  id: string;
  name: string;
};

export type Folder = {
  id: string;
  name: string;
  files: File[];
};

export type List = Folder[];

export default function move(list: List, source: string, destination: string): List {
  const sourceFolder: Folder | undefined = list.find((folder) =>
    folder.files.find((file) => file.id === source),
  );

  if (!sourceFolder) {
    throw new Error('You cannot move a folder');
  }

  const destinationFolder: Folder | undefined = list.find((folder) => folder.id === destination);

  if (!destinationFolder) {
    throw new Error('You cannot specify a file as the destination');
  }

  const fileIndex: number = sourceFolder.files.findIndex((file) => file.id === source);

  destinationFolder.files.push(sourceFolder.files[fileIndex]);
  sourceFolder.files.splice(fileIndex, 1);

  return list;
}
