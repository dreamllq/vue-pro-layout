import EventEmitter from 'eventemitter3';
const bus = new EventEmitter();

export const useBus = () => bus;