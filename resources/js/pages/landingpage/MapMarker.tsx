// Simple marker component for GoogleMapReact
type MarkerProps = { lat?: number; lng?: number };
export default function MapMarker(_props: MarkerProps) {
  return (
    <div style={{ transform: 'translate(-50%, -100%)', zIndex: 2 }}>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19" cy="19" r="19" fill="#FFD700" fillOpacity="0.8"/>
        <circle cx="19" cy="19" r="10" fill="#E74C3C"/>
        <circle cx="19" cy="19" r="5" fill="#fff"/>
      </svg>
    </div>
  );
}
