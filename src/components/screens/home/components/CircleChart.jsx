import React, { useRef, useEffect } from 'react';

const CircleChart = ({ data, subSegmentColors, size, imageSize, imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = (size / 2) * 0.95;
    const imageRadius = imageSize / 2;
    const lineWidth = 5;

    // Устанавливаем цвет фона
    ctx.fillStyle = '#c7c9dd';
    ctx.fillRect(0, 0, size, size); 

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, imageRadius, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, centerX - imageRadius, centerY - imageRadius, imageSize, imageSize);
      ctx.restore();
    };

    let startAngle = 0;
    const total = data.reduce((sum, item) => sum + item.value, 0);

    for (let i = 0; i < data.length; i++) {
      const { value, label } = data[i];
      const sliceAngle = (value / total) * 2 * Math.PI;

      const subSegmentHeight = radius * 0.15; // Увеличиваем высоту подсегментов
      let subStartRadius = radius;
      for (let j = 2; j >= 0; j--) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, subStartRadius, startAngle, startAngle + sliceAngle, false);
        ctx.arc(centerX, centerY, subStartRadius - subSegmentHeight, startAngle + sliceAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = subSegmentColors[i][j];
        ctx.fill();                       // Добавляем круги между подсегментами
        subStartRadius -= subSegmentHeight + 3;
      }

      // Добавляем круг вокруг фотографии
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, imageRadius + 1 , 0, 2 * Math.PI);
    ctx.fillStyle = '#c9cbde';
    ctx.fill();
    ctx.restore();
      
      const textRadius = radius - subSegmentHeight * 0.5; // Смещаем радиус текста для лучшего отображения
      const textWidth = subSegmentHeight / 0.25; // Задаем ширину текста
      const text = label.split('');
      const angleStep = sliceAngle / label.length / 1.5;

      const startTextAngle = startAngle + (sliceAngle - textWidth / textRadius) / 2; // Центральное положение текста

      ctx.font = 'bold 14px "Golos Text"';
    ctx.fillStyle = subSegmentColors[i][3];
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

      text.forEach((char, index) => {
        //const charAngle = startAngle + angleStep * index + angleStep / 2;
        const charAngle = startTextAngle + angleStep * index;
        const charX = centerX + Math.cos(charAngle) * textRadius;
        const charY = centerY + Math.sin(charAngle) * textRadius;

        ctx.save();
        ctx.translate(charX, charY);
        ctx.rotate(charAngle + Math.PI / 2);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        //ctx.font = 'bold 17px Golos';
        //ctx.fillStyle = 'white';
        ctx.fillText(char, 0, 0);
        ctx.restore();
      });

      ctx.lineWidth = lineWidth;

      ctx.beginPath();
      const endX = centerX + radius * Math.cos(startAngle + sliceAngle);
      const endY = centerY + radius * Math.sin(startAngle + sliceAngle);
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.lineWidth = lineWidth * 0.8;
      ctx.strokeStyle = "#c8cade";
      ctx.stroke();

      startAngle += sliceAngle;
    }
    // Добавляем внешний круг вокруг всех сегментов с тенью
    ctx.save();
    ctx.shadowColor = '#FFFFFF'; // Цвет тени #c9cbde
    ctx.shadowBlur = 10; // Размытие тени
    ctx.shadowOffsetX = 0; // Смещение тени по X
    ctx.shadowOffsetY = 0; // Смещение тени по Y
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + lineWidth / 2, 0, 2 * Math.PI);
    ctx.strokeStyle = '#bfc2d7';
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.restore();
    /*ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#bfc2d7';
    ctx.lineWidth = lineWidth;
    ctx.stroke();*/
  
  }, [data, subSegmentColors, size, imageSize, imageUrl]);

  return <canvas ref={canvasRef} width={size} height={size} />;
};

export default CircleChart;
