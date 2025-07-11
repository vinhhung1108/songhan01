interface VideoPlayerProps {
  videoId: string;
  title: string;
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  return (
    <div className="bg-opacity-98 rounded-2xl p-1 shadow-xl">
      <div className="bg-blue-100 bg-opacity-10 rounded-lg p-4 shadow-md mb-1">
        <h3 className="text-xl md:text-xl font-bold text-gray-800 text-center">
          {title}
        </h3>
      </div>
      <div className="relative aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-[300px] md:h-[450px] rounded-lg shadow-md"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-presentation"
        />
      </div>
    </div>
  );
}
