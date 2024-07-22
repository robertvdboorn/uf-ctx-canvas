import { IS_RENDERED_BY_UNIFORM_ATTRIBUTE } from '@uniformdev/canvas';
import type { UniformPlaygroundDecorator } from '@uniformdev/canvas-react';
import { useState } from 'react';

const backgroundDecoratorOptions = {
  light: 'white',
  dark: '#234',
  transparent: 'transparent',
};

export const BackgroundDecorator: UniformPlaygroundDecorator = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState<string>();

  return (
    <div style={{ minWidth: '100vw', minHeight: '100vh', backgroundColor: selectedColor }}>
      <div
        style={{ display: 'flex', gap: 4, padding: 4, justifyContent: 'flex-end' }}
        {...{ [IS_RENDERED_BY_UNIFORM_ATTRIBUTE]: true }}
      >
        {Object.entries(backgroundDecoratorOptions).map(([name, color]) => (
          <button
            key={name}
            onClick={() => setSelectedColor(color)}
            style={{
              width: 32,
              height: 32,
              border: '2px solid gray',
              borderRadius: 99,
              background:
                color && color !== 'transparent'
                  ? color
                  : 'linear-gradient(45deg, white 48%, gray 48%, gray 52%, white 52%)',
              boxShadow: selectedColor === color ? '0 0 0 2px cyan' : undefined,
            }}
            title={name}
          />
        ))}
      </div>
      {children}
    </div>
  );
};
