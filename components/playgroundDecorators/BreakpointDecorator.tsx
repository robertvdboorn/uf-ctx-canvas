import { IS_RENDERED_BY_UNIFORM_ATTRIBUTE } from '@uniformdev/canvas';
import { type UniformPlaygroundDecorator } from '@uniformdev/canvas-react';
import { useState } from 'react';

const widths = [720, 512, 420, 360];

export const BreakpointDecorator: UniformPlaygroundDecorator = ({ children }) => {
  const [selectedWidth, setSelectedWidth] = useState<number>();

  return (
    <div>
      <div style={{ height: 24, position: 'relative', justifyContent: 'flex-end' }}>
        <BreakpointDecoratorBar width={undefined} onSelect={setSelectedWidth} />
        {widths.map((width) => (
          <BreakpointDecoratorBar key={width} width={width} onSelect={setSelectedWidth} />
        ))}
      </div>
      <div style={{ width: selectedWidth, margin: 'auto' }}>{children}</div>
    </div>
  );
};

const BreakpointDecoratorBar = ({
  width,
  onSelect,
}: {
  width: number | undefined;
  onSelect: (width: number | undefined) => void;
}) => {
  return (
    <button
      key={width}
      style={{
        width: width ?? '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#ddd',
        border: '2px solid #999',
      }}
      onClick={() => onSelect(width)}
      {...{ [IS_RENDERED_BY_UNIFORM_ATTRIBUTE]: true }}
    />
  );
};
