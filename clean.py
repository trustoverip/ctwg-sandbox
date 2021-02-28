#!/usr/bin/python

import os
import sys



def clean(fname):
    print('cleaning %s' % fname)
    with open(fname, 'rt') as f:
        lines = f.readlines()
    newlines = []
    for line in lines:
        if line.startswith('glossaryText:') or line.startswith('conceptRef:'):
            pass
        else:
            if line.startswith('hoverText:'):
                line = line[:10] + line[10:].replace(':', ' -- ')
            newlines.append(line)
    bak = fname + '.bak'
    if os.path.isfile(bak):
        os.remove(bak)
    os.rename(fname, fname + '.bak')
    with open(fname, 'wt') as f:
        f.write('\n'.join(newlines))


if __name__ == '__main__':
    args = sys.argv[1:]
    for arg in args:
        clean(arg)
