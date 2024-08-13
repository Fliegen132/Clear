using UnityEngine;

public class IdleState : IState
{
    public void OnEnter()
    {
        Debug.Log("Enter on idle state");
    }

    public void FixedUpdateState()
    {
    }

    public void UpdateState()
    {
    }

    public void OnExit()
    {
        Debug.Log("Exit on idle state");
    }
}
