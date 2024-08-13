using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    
    private void Awake()
    {
        _startPosition = transform.position;
    }

    public static void SetTarget(Transform newTarget)
    { 
        _target = newTarget;
    }

    private void Update()
    {
        if(_target != null)
            transform.position = new Vector3(_startPosition.x + _target.transform.position.x, 10, _startPosition.z + _target.transform.position.z);    
    }

    private static Transform _target;
    private Vector3 _startPosition;

}
