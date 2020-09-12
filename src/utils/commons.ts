import { Path } from '../interfaces/commons';

const getPathString = (path: Path) => {
  let str: string = '';
  for (let i = 0; i < path.components.length; i++) {
    str += path.components[i];
    if (i > 0 && i < path.components.length) str += '/';
  }
  return str;
};

const getPath = (components: string[], isFile?: boolean): Path => {
  let pathComponents: string[] = [];
  if (components[0] !== '/') pathComponents = ['/'];
  pathComponents = [...pathComponents, ...components];
  return {
    components: pathComponents,
    isFile: isFile ? true : false,
  };
};

export { getPathString, getPath };
